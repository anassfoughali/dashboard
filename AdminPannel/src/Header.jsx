// Header.js
import React from 'react';
import { CgUserList } from "react-icons/cg"
import Button from './Button'; // Import your Button component

const Header = () => {
  // Define onClick handlers for your buttons
  const handleButtonClick1 = () => {
    // Handle button click logic for button 1
  }

  const handleButtonClick2 = () => {
    // Handle button click logic for button 2
  }

  const handleButtonClick3 = () => {
    // Handle button click logic for button 3
  }

  return (
    <header >
      <div className='Buttons' >
        {/* Button 1 */}
       

        <Button  on Click={handleButtonClick1}   text="PRODUIT"  />
      
        {/* Button 2 */}

        <Button onClick={handleButtonClick2} text="Team member" />
        {/* Button 3 */}
        <Button onClick={handleButtonClick3} text="03-06-2024" />
      </div>
    </header>
  );
  
}


export default Header;
