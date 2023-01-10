
function DeleteIcon({className}) {
    const cls1 = {
        fill: "none",
        stroke: "#020202",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        strokeWidth: "22px",
    }
    
    return (
        <svg
            className={className}
            viewBox="0 0 1000 1000" 
            dataName="Layer 2" 
            id="Layer_2" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
             
            </defs>
            <path 
                class="cls-1"
                style={cls1}
                d="M717.37,353.41l-30,390.71a61.19,61.19,0,0,1-61.19,61.19H373.85a61.19,61.19,0,0,1-61.19-61.19l-30-390.71"/>
            <line 
                class="cls-1"
                style={cls1}
                x1="600.9" 
                x2="418.7" 
                y1="314.08" 
                y2="314.08"/>
            <path
                class="cls-1" 
                style={cls1}
                d="M351.57,314.08H222V276.19a28,28,0,0,1,28-28H438.35c0-.1,0-.19,0-.28,0-29.4,27.61-53.24,61.66-53.24s61.66,23.84,61.66,53.24c0,.09,0,.18,0,.28H750a28,28,0,0,1,28,28v37.89H671.37"/>
            <line
                class="cls-1"
                style={cls1}
                x1="397.36" 
                x2="397.36"
                y1="455.63"
                y2="700.74"/>
            <line 
                class="cls-1" 
                style={cls1}
                x1="500" 
                x2="500" 
                y1="455.63" 
                y2="700.74"/>
            <line 
                class="cls-1" 
                style={cls1}
                x1="602.64"
                x2="602.64"
                y1="455.63"
                y2="700.74"/>
        </svg>
    )
}

export default DeleteIcon