import React from "react";

function Banner({ success, answer, guessCount }) {
  const bannerStatusClassName = success ? "happy" : "sad";
  return (
    <div className={`banner ${bannerStatusClassName}`}>
      {success && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessCount} guesses</strong>.
        </p>
      )}
      {!success && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
