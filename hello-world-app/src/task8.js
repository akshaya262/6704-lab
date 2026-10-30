import { useEffect, useState } from "react";

export default function Task8() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section>
      <h2>Task 8: Current Date and Time</h2>
      <p>Date: {currentTime.toLocaleDateString()}</p>
      <p>Time: {currentTime.toLocaleTimeString()}</p>
    </section>
  );
}