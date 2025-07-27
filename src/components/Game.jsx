import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// @ts-expect-error - random-hex-color has no type definitions
import colorGen from "random-hex-color";

const Person = ({ id, color, x, y, isDead, isFading, onClick }) => {
  return (
    <div
      style={{
        color: isDead ? "#ff0000" : color,
        position: "absolute",
        fontSize: "64px",
        fontWeight: "800",
        left: `${x}px`,
        top: `${y}px`,
        transition: isFading ? "opacity 2s ease-out" : "all 3s ease-in-out",
        transform: "translate(-50%, -50%)",
        cursor: isDead ? "default" : "pointer",
        userSelect: "none",
        opacity: isFading ? 0 : isDead ? 0.7 : 1,
      }}
      className="person"
      onClick={() => !isDead && onClick(id)}
    >
      <span style={{ position: "absolute", top: 0 }}>o</span>
      <span style={{ position: "absolute", top: 30 }}>+</span>
      <span style={{ position: "absolute", top: 60 }}>^</span>
    </div>
  );
};

export default function Game() {
  const [people, setPeople] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [highScore, setHighScore] = useState(null);
  const [fadingPeople, setFadingPeople] = useState(new Set());
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Load high score from localStorage on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem("personClickerHighScore");
    if (savedHighScore) {
      setHighScore(parseFloat(savedHighScore));
    }
  }, []);

  // Timer effect
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isGameStarted && !isGameComplete) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          const newTime = prevTimer + 0.1;
          return newTime;
        });
      }, 100);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isGameStarted, isGameComplete]);

  // Initialize 20 people with random positions
  useEffect(() => {
    const initialPeople = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      color: colorGen(),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      targetX: Math.random() * (window.innerWidth - 100),
      targetY: Math.random() * (window.innerHeight - 100),
      isDead: false,
    }));
    setPeople(initialPeople);
  }, []);

  // Move people to new random positions every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPeople((prevPeople) =>
        prevPeople.map((person) => ({
          ...person,
          x: person.targetX,
          y: person.targetY,
          targetX: person.isDead
            ? person.x
            : Math.random() * (window.innerWidth - 100),
          targetY: person.isDead
            ? person.y
            : Math.random() * (window.innerHeight - 100),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePersonClick = (personId) => {
    // Start the game on first click
    if (!isGameStarted) {
      setIsGameStarted(true);
    }

    setPeople((prevPeople) => {
      const updatedPeople = prevPeople.map((person) =>
        person.id === personId
          ? {
              ...person,
              isDead: true,
              x: Math.random() * (window.innerWidth - 100),
              y: window.innerHeight - 80, // Position at bottom
              targetX: Math.random() * (window.innerWidth - 100),
              targetY: window.innerHeight - 80,
            }
          : person
      );

      // Start fade-out animation for the killed person
      setFadingPeople((prev) => new Set([...prev, personId]));

      // Remove the person from DOM after 2 seconds
      setTimeout(() => {
        setPeople((prevPeople) =>
          prevPeople.filter((person) => person.id !== personId)
        );
        setFadingPeople((prev) => {
          const newSet = new Set(prev);
          newSet.delete(personId);
          return newSet;
        });
      }, 2000);

      // Check if all people are dead
      const allDead = updatedPeople.every((person) => person.isDead);
      if (allDead && !isGameComplete) {
        setIsGameComplete(true);
        const finalTime = timer;

        // Update high score if this is faster
        if (!highScore || finalTime < highScore) {
          setHighScore(finalTime);
          localStorage.setItem("personClickerHighScore", finalTime.toString());
        }
      }

      return updatedPeople;
    });
  };

  const resetGame = () => {
    // Clear the timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setPeople(
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        color: colorGen(),
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        targetX: Math.random() * (window.innerWidth - 100),
        targetY: Math.random() * (window.innerHeight - 100),
        isDead: false,
      }))
    );
    setTimer(0);
    setIsGameStarted(false);
    setIsGameComplete(false);
  };

  return (
    <div
      ref={containerRef}
      className="App"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* UI Overlay - Fixed at top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "rgba(245, 245, 245, 0.95)",
          padding: "20px",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Back Button */}
          <Link
            to="/"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000",
              backgroundColor: "#fff",
              padding: "8px 16px",
              borderRadius: "6px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              border: "1px solid #000",
              textDecoration: "none",
            }}
          >
            ← Back to Portfolio
          </Link>

          {/* Game Instructions */}
          <div
            style={{
              fontSize: "16px",
              color: "#666",
              backgroundColor: "#fff",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            Click all 20 people as fast as possible!
          </div>

          {/* Timer and High Score */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {/* Timer Display */}
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: isGameComplete ? "#22c55e" : "#000",
                backgroundColor: "#fff",
                padding: "8px 16px",
                borderRadius: "6px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                border: "1px solid #000",
              }}
            >
              Time: {timer.toFixed(1)}s {isGameComplete && "✓"}
            </div>

            {/* High Score Display */}
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000",
                backgroundColor: "#fff",
                padding: "8px 16px",
                borderRadius: "6px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                border: "1px solid #000",
              }}
            >
              {highScore ? `Best: ${highScore.toFixed(1)}s` : "Best: --"}
            </div>
          </div>
        </div>
      </div>

      {/* Game Complete Message */}
      {isGameComplete && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#000",
            backgroundColor: "#fff",
            padding: "20px 40px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            border: "2px solid #000",
            zIndex: 1001,
            textAlign: "center",
          }}
        >
          <div>Game Complete!</div>
          <div style={{ fontSize: "24px", marginTop: "10px" }}>
            Time: {timer.toFixed(1)}s
          </div>
          {(!highScore || timer < highScore) && (
            <div
              style={{ fontSize: "20px", marginTop: "10px", color: "#22c55e" }}
            >
              New Best Time! 🎉
            </div>
          )}
          <button
            onClick={resetGame}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Play Again
          </button>
        </div>
      )}

      {/* Game Area - Below the UI overlay */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          marginTop: "80px", // Space for the fixed UI overlay
        }}
      >
        {people.map((person) => (
          <Person
            key={person.id}
            id={person.id}
            color={person.color}
            x={person.x}
            y={person.y}
            isDead={person.isDead}
            isFading={fadingPeople.has(person.id)}
            onClick={handlePersonClick}
          />
        ))}
      </div>
    </div>
  );
}
