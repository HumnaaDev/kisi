import { FC } from "react"
import styles from './Button.module.scss'

interface IButtonProps {
    name: string
    type: "button" | "submit" | "reset"
}

export const Button:FC<IButtonProps> = ({ name, type }) => {
    return (
        <button className={styles["rounded-button"]} type={type}>{name}</button>
    )
}