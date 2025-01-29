"use client"
import { useState } from "react"

export const QUantityButton = () => {
    const[quantity] = useState<number | null>(0)
    return(
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
    )
}