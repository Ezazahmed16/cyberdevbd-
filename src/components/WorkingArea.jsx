import { useId } from "react";

const WorkingArea = () => {
    return (
        <div className="min-h-screen justify-center items-center">
            <div className="py-10">
                <div className="w-auto mx-auto text-center py-5">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold mb-1 text-red-500">
                        Our Services
                    </h1>
                    <p className="text-neutral-400 text-xs sm:text-base w-4/5 md:w-2/3 m-auto pt-2">
                        We provide tailored solutions to help your business thrive in the digital age
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 max-w-7xl mx-auto">
                    {grid.map((feature) => (
                        <div
                            key={feature.title}
                            className="relative bg-gradient-to-b from-neutral-900  to-neutral-950 p-6 rounded-3xl overflow-hidden"
                        >
                            <Grid size={20} />
                            <p className="text-base font-bold text-white relative z-20">
                                {feature.title}
                            </p>
                            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkingArea


const grid = [
    {
        title: "Custom Website Development",
        description:
            "Stunning, SEO-friendly websites designed for user experience and conversions.",
    },
    {
        title: "Software Development",
        description:
            "Powerful, scalable software solutions to streamline your business operations.",
    },
    {
        title: "E-commerce Solution",
        description:
            "Fully integrated online stores to expand your business reach.",
    },
    {
        title: "SEO & Digital Marketing",
        description:
            "Boost your online presence with expert SEO strategies and digital marketing.",
    },
    {
        title: "Health & Wellness Solutions",
        description:
            "Specialized web and software services for the health and wellness industry.",
    },
    {
        title: "Social Media Managment & Marketing",
        description:
            "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
];

export const Grid = ({
    pattern,
    size,
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}