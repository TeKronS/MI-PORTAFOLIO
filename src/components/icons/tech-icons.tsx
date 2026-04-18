export const TechIcon = ({ tech, className }: { tech: string; className?: string }) => {
    const iconClass = className || "h-12 w-12 text-foreground";

    const icons: { [key: string]: JSX.Element } = {
        javascript: (
            <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-labelledby="js-title">
                <title id="js-title">JavaScript</title>
                <path d="M3 3h18v18H3z" />
                <path d="M10.5 16.5c0 1.5-1.5 1.5-1.5 0v-9h3M15 12h4.5c0 3.5-3.5 4.5-5.5 4.5S10 16.5 10 13s3.5-4.5 5.5-4.5 4 1 4 4" />
            </svg>
        ),
        typescript: (
            <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-labelledby="ts-title">
                <title id="ts-title">TypeScript</title>
                <path d="M3 3h18v18H3z" />
                <path d="M12 9V3h8v6l-4 4-4-4zM12 9H4v12h16v-7" />
                <path d="M8.5 16.5c0 1.5-1.5 1.5-1.5 0v-5h3M12.5 11.5v5" />
            </svg>
        ),
        react: (
            <svg className={iconClass} viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" aria-labelledby="react-title">
                <title id="react-title">React</title>
                <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        ),
        nextjs: (
            <svg className={iconClass} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" aria-labelledby="nextjs-title">
                <title id="nextjs-title">Next.js</title>
                <path d="M9 15V9l7.7-3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 19.5c-3.3 0-6-2.7-6-6s2.7-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        html: (
            <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-labelledby="html-title">
                <title id="html-title">HTML</title>
                <path d="M4 3l1.72 19.2L12 24l6.28-1.8L20 3H4zm11.5 7.5l-.45 4.5L12 16.2l-3.05-1.2-.2-2.3h2.2l.1 1.2 1 .4 1-.4.15-2H8.5l-.2-2h7.4l.1-1.5H6.2l-.2-2H18l-.5 7.5z" />
            </svg>
        ),
        css: (
            <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-labelledby="css-title">
                 <title id="css-title">CSS</title>
                <path d="M4 3l1.72 19.2L12 24l6.28-1.8L20 3H4zM15 8l-6.5 3h4l-6.5 3L17 8h-2z" />
            </svg>
        ),
        firebase: (
            <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-labelledby="firebase-title">
                 <title id="firebase-title">Firebase</title>
                <path d="M4.333 14.05L9.66 3.333l-3.326 9.384" />
                <path d="M5.437 8.356L15.667 4l-1.93 11.958" />
                <path d="M11.667 21L18 7.333l-10.326 10.34" />
            </svg>
        ),
        mongodb: (
            <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-labelledby="mongodb-title">
                <title id="mongodb-title">MongoDB</title>
                <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10c5.132,0,9.373-3.821,9.931-8.73L15.5,14V9.5C15.5,7,13,5,11.5,5 C10.057,5,9.5,6.5,9.5,7.5S9,14.5,9,14.5c0,1.88,0.729,3.63,2,4.899V12c0-1.04,0.2-2.5-1-2.5c-1.5,0-1,2.5-1,2.5s0,3,0,4.5 c0,0.828-0.672,1.5-1.5,1.5S6.5,20.828,6.5,20C6.5,18,8,13,8,13s-0.5-4-3-4" />
            </svg>
        ),
        graphql: (
            <svg className={iconClass} viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-labelledby="graphql-title">
                <title id="graphql-title">GraphQL</title>
                <path d="M12 2l9.9 6v12L12 22l-9.9-6V8l9.9-6z" />
                <path d="M12 2v20" />
                <path d="M12 8.333l9.9 6M2.1 14l9.9-6" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                <circle cx="5.25" cy="8.5" r="1.5" fill="currentColor" />
                <circle cx="18.75" cy="8.5" r="1.5" fill="currentColor" />
                <circle cx="5.25" cy="15.5" r="1.5" fill="currentColor" />
                <circle cx="18.75" cy="15.5" r="1.5" fill="currentColor" />
            </svg>
        ),
    };

    return icons[tech.toLowerCase()] || null;
};
