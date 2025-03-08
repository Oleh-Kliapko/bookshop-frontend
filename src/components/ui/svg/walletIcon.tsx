import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const WalletIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customViolet") || "#8763FF",
	size = 40,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs />
				<rect
					id="circum:wallet"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<path
					id="Vector"
					d="M32.39 6.77L7.6 6.77C6.5 6.77 5.44 7.21 4.66 7.99C3.88 8.77 3.44 9.83 3.44 10.94L3.44 29.05C3.44 30.16 3.88 31.22 4.66 32C5.44 32.78 6.5 33.22 7.6 33.22L32.39 33.22C33.49 33.22 34.55 32.78 35.33 32C36.11 31.22 36.55 30.16 36.55 29.05L36.55 10.94C36.55 9.83 36.11 8.77 35.33 7.99C34.55 7.21 33.49 6.77 32.39 6.77ZM34.89 23.32L24.19 23.32C23.3 23.32 22.46 22.97 21.83 22.34C21.21 21.72 20.85 20.87 20.85 19.99C20.85 19.1 21.21 18.25 21.83 17.63C22.46 17 23.3 16.65 24.19 16.65L34.89 16.65L34.89 23.32ZM24.19 14.99C22.86 14.99 21.59 15.51 20.65 16.45C19.71 17.39 19.19 18.66 19.19 19.99C19.19 21.31 19.71 22.58 20.65 23.52C21.59 24.46 22.86 24.99 24.19 24.99L34.89 24.99L34.89 29.05C34.89 29.72 34.62 30.35 34.15 30.82C33.69 31.29 33.05 31.55 32.39 31.55L7.6 31.55C6.94 31.55 6.3 31.29 5.84 30.82C5.37 30.35 5.1 29.72 5.1 29.05L5.1 10.94C5.1 10.27 5.37 9.64 5.84 9.17C6.3 8.7 6.94 8.44 7.6 8.44L32.39 8.44C33.05 8.44 33.69 8.7 34.15 9.17C34.62 9.64 34.89 10.27 34.89 10.94L34.89 14.99L24.19 14.99Z"
					fill={getTailwindColor(colorFill) || "#8763FF"}
					fillOpacity="1.000000"
					fillRule="nonzero"
				/>
				<path
					id="Vector"
					d="M25.86 19.99C25.86 20.91 25.11 21.65 24.19 21.65C23.27 21.65 22.53 20.91 22.53 19.99C22.53 19.07 23.27 18.32 24.19 18.32C25.11 18.32 25.86 19.07 25.86 19.99Z"
					fill={getTailwindColor(colorFill) || "#8763FF"}
					fillOpacity="1.000000"
					fillRule="evenodd"
				/>
			</svg>
		</div>
	)
}
