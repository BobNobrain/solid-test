declare module '*.css' {
    const styles: { [className in string]: string };
    export default styles;
}
