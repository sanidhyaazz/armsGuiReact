const jointData = [
    {
        id: "joint1",
        label: "Base:",
        inputMin: -180,
        inputMax: 180,
        inputStep: 1,
        inputValue: 0,
        onInput: "updateSliderValue('joint1', 'joint1Value', 'joint1Radians');",
        spanId: "joint1Value",
        divId: "joint1Radians",
        span: 0,
        rad: "(0 rad)"
    },
    {
        id: "joint2",
        label: "Shoulder Joint:",
        inputMin: -134,
        inputMax: 124,
        inputStep: 1,
        inputValue: 0,
        onInput: "updateSliderValue('joint2', 'joint2Value', 'joint2Radians');",
        spanId: "joint2Value",
        divId: "joint2Radians",
        span: 0,
        rad: "(0 rad)"
    },
    {
        id: "joint3",
        label: "Elbow Joint:",
        inputMin: -160,
        inputMax: 160,
        inputStep: 1,
        inputValue: 0,
        onInput: "updateSliderValue('joint3', 'joint3Value', 'joint3Radians');",
        spanId: "joint3Value",
        divId: "joint3Radians",
        span: 0,
        rad: "(0 rad)"
    },
    {
        id: "joint4",
        label: "Lower Wrist:",
        inputMin: -180,
        inputMax: 180,
        inputStep: 1,
        inputValue: 0,
        onInput: "updateSliderValue('joint4', 'joint4Value', 'joint4Radians');",
        spanId: "joint4Value",
        divId: "joint4Radians",
        span: 0,
        rad: "(0 rad)"
    },
    {
        id: "joint5",
        label: "Upper Wrist:",
        inputMin: -148,
        inputMax: 48,
        inputStep: 1,
        inputValue: 0,
        onInput: "updateSliderValue('joint5', 'joint5Value', 'joint5Radians');",
        spanId: "joint5Value",
        divId: "joint5Radians",
        span: 0,
        rad: "(0 rad)"
    },
]

export default jointData;