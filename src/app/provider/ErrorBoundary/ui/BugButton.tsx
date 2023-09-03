import React, { useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

const BugButton = () => {
  const [error, setError] = useState(false);
  const onTrow = () => setError(true);

  return <Button onClick={onTrow}>Throw error</Button>;
};

export default BugButton;
