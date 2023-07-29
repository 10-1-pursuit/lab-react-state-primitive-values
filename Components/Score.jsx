  // Function to handle the "+X" button click
  const handleIncrement = () => {
    if (paidToChangeIncrementor) {
      // If the user has paid 10 points, increase the count by 2
      setCount(count + 2);
      // Reset the paidToChangeIncrementor state
      setPaidToChangeIncrementor(false);
    } else {
      // If the user hasn't paid, increase the count by 1
      setCount(count + 1);
    }
  };

  // Function to handle the "Pay 10 points to change from +X to +Y" button click
  const handleChangeIncrementor = () => {
    // Check if the user has at least 10 points
    if (count >= 10) {
      // Deduct 10 points from the count
      setCount(count - 10);
      // Set the paidToChangeIncrementor state to true
      setPaidToChangeIncrementor(true);
    }
  };
