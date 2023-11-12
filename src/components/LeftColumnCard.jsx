import React from "react"
import { Card } from "@mui/material"


const LeftColumnCard = ({ children }) => {

    return(
        <>
            <Card>
                {children}
            </Card>
        </>
    );
}

export default LeftColumnCard