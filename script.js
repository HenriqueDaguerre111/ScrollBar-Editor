// script.js
document.addEventListener("DOMContentLoaded", () => {
    const inputs = {
        scrollbarColor: document.getElementById("scrollbarColor"),
        scrollbarBackground: document.getElementById("scrollbarBackground"),
        scrollbarWidth: document.getElementById("scrollbarWidth"),
        thumbBorderWidth: document.getElementById("thumbBorderWidth"),
        thumbBorderStyle: document.getElementById("thumbBorderStyle"),
        thumbBorderColor: document.getElementById("thumbBorderColor"),
        shadowOffsetX: document.getElementById("shadowOffsetX"),
        shadowOffsetY: document.getElementById("shadowOffsetY"),
        shadowBlur: document.getElementById("shadowBlur"),
        shadowSpread: document.getElementById("shadowSpread"),
        shadowColor: document.getElementById("shadowColor"),
    };

    const scrollArea = document.getElementById("scrollArea");
    const generatedCSS = document.getElementById("generatedCSS");
    const copyCSS = document.getElementById("copyCSS");

    const updatePreview = () => {
        const styles = {
            thumbColor: inputs.scrollbarColor.value,
            trackColor: inputs.scrollbarBackground.value,
            width: `${inputs.scrollbarWidth.value}px`,
            thumbBorder: `${inputs.thumbBorderWidth.value}px ${inputs.thumbBorderStyle.value} ${inputs.thumbBorderColor.value}`,
            thumbShadow: `${inputs.shadowOffsetX.value}px ${inputs.shadowOffsetY.value}px ${inputs.shadowBlur.value}px ${inputs.shadowSpread.value}px ${inputs.shadowColor.value}`,
        };

        const styleTagId = "dynamic-scrollbar-styles";
        let styleTag = document.getElementById(styleTagId);
        if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.id = styleTagId;
            document.head.appendChild(styleTag);
        }

        styleTag.innerHTML = `
.scroll-area::-webkit-scrollbar {
    width: ${styles.width};
}

.scroll-area::-webkit-scrollbar-thumb {
    background-color: ${styles.thumbColor};
    border: ${styles.thumbBorder};
    box-shadow: ${styles.thumbShadow};
    border-radius: 5px;
    min-height: 20px;
}

.scroll-area::-webkit-scrollbar-track {
    background-color: ${styles.trackColor};
}`;

        generatedCSS.value = styleTag.innerHTML;
    };

    const copyToClipboard = () => {
        generatedCSS.select();
        document.execCommand("copy");
        alert("CSS copiado para a área de transferência!");
    };

    Object.values(inputs).forEach(input => {
        input.addEventListener("input", updatePreview);
    });

    copyCSS.addEventListener("click", copyToClipboard);

    updatePreview();
});
