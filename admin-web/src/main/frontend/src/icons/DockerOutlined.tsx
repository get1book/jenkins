import Icon from "@ant-design/icons";

const dockerSvg = () => (
    <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
    >
        <path
            d="M1004.544 466.08a161.504 161.504 0 0 0-119.52-10.816 158.88 158.88 0 0 0-64.608-101.216l-12.8-10.08-10.848 12.16a133.888 133.888 0 0 0-25.28 96.32 123.552 123.552 0 0 0 24.128 64.704 187.648 187.648 0 0 1-34.752 15.296A232.416 232.416 0 0 1 689.216 544H13.568l-1.44 15.136a282.656 282.656 0 0 0 23.776 147.2l9.248 18.336 1.056 1.728c63.52 104.896 190.24 159.232 311.808 159.232 235.392 0 414.368-112.352 503.552-328.224 59.584 3.04 120.544-14.112 149.696-69.408l7.424-14.112-14.144-7.936zM210.464 739.2a52.832 52.832 0 1 1 54.4-52.832 53.664 53.664 0 0 1-54.4 52.832z"/>
        <path
            d="M210.464 658.432a27.808 27.808 0 1 0 28.608 27.84 28.224 28.224 0 0 0-28.608-27.84M64 416h96v96H64z m128 0h96v96h-96z m0-128h96v96h-96z m128 0h96v96h-96z m0 128h96v96h-96z m128 0h96v96h-96z m128 0h96v96h-96zM448 288h96v96h-96z m0-128h96v96h-96z"/>
    </svg>
);

const DockerOutlined = () => {
    return (
        <div
            style={{
                display: "inline-block",
                fill: "currentColor",
                fontSize: 16,
                lineHeight: 1,
            }}
        >
            <Icon component={dockerSvg}/>
        </div>
    );
};

export default DockerOutlined;
