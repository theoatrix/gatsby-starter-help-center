/** @jsx jsx */
import { jsx } from "theme-ui"

const Logo = props => (
  <svg
    sx={{
      height: props.size,
      width: props.size,
    }}
    viewBox="0 0 244 221"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <path
          d="M23.32,0.709090909 L220.68,0.709090909 C233.55928,0.709090909 244,11.1498105 244,24.0290909 L244,197.68 C244,210.55928 233.55928,221 220.68,221 L23.32,221 C10.4407196,221 8.07776423e-15,210.55928 -1.0658141e-14,197.68 L0,24.0290909 C-1.57725695e-15,11.1498105 10.4407196,0.709090909 23.32,0.709090909 Z M25.4469565,9.18181818 C16.0802072,9.18181818 8.48695652,16.7750688 8.48695652,26.1418182 L8.48695652,195.567273 C8.48695652,204.934022 16.0802072,212.527273 25.4469565,212.527273 L218.553043,212.527273 C227.919793,212.527273 235.513043,204.934022 235.513043,195.567273 L235.513043,26.1418182 C235.513043,16.7750688 227.919793,9.18181818 218.553043,9.18181818 L25.4469565,9.18181818 Z"
          fill={props.color}
        ></path>
        <path
          d="M5.30434783,68.4909091 L238.695652,68.4909091"
          id="Line"
          stroke={props.color}
          strokeWidth="9.36"
          strokeLinecap="square"
        ></path>
        <rect
          stroke={props.color}
          fill={props.color}
          x="30.5"
          y="30.5"
          width="183"
          height="14"
          rx="5"
        ></rect>
      </g>
    </g>
  </svg>
)

Logo.defaultProps = {
  color: "white",
}

export default Logo
