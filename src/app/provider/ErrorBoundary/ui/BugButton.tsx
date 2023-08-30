import React, { useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

const BugButton = () => {
  const [error, setError] = useState(false);
  const onTrow = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onTrow}>Throw error</Button>;
};

export default BugButton;
