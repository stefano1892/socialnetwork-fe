import { Card } from "@mui/material";
import React from "react";

const CardLeftColumn = ({ children, className }) => {
    return ( 
        <Card className="left-col-card">
            { children }
        </Card>
    );
}
 
export default CardLeftColumn;