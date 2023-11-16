import { Card } from "@mui/material";
import React from "react";

const CardRightColumn = ({ children, className }) => {
    return ( 
        <Card className="right-col-card">
            { children }
        </Card>
    );
}
 
export default CardRightColumn;