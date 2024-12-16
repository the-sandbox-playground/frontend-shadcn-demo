import { FC } from "react"

const ArrowLeftIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 19L10.41 17.59L5.83 13L22 13V11L5.83 11L10.42 6.41L9 5L2 12L9 19Z" fill="#FAFAFA" />
    </svg>
  )
}

export default ArrowLeftIcon
