import React, { useState, useEffect } from 'react';

const INITIAL_OFFSET = 25;
const circleConfig = {
    viewBox: '0 0 38 38',
    x: '19',
    y: '19',
    radio: '15.91549430918954'
};

const CircleProgressBarBase = ({
                                   className,
                                   strokeColor,
                                   strokeWidth,
                                   innerText,
                                   legendText,
                                   percentage,
                                   trailStrokeWidth,
                                   trailStrokeColor,
                                   trailSpaced,
                                   speed
                               }) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};


export const CircleProgressBarBase1 = ({
                                   className,
                                   strokeColor,
                                   strokeWidth,
                                   innerText,
                                   legendText,
                                   percentage,
                                   trailStrokeWidth,
                                   trailStrokeColor,
                                   trailSpaced,
                                   speed
                               }) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};

export const CircleProgressBarBase2 = ({
                                   className,
                                   strokeColor,
                                   strokeWidth,
                                   innerText,
                                   legendText,
                                   percentage,
                                   trailStrokeWidth,
                                   trailStrokeColor,
                                   trailSpaced,
                                   speed
                               }) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};

export const CircleProgressBarBase3 = ({
                                   className,
                                   strokeColor,
                                   strokeWidth,
                                   innerText,
                                   legendText,
                                   percentage,
                                   trailStrokeWidth,
                                   trailStrokeColor,
                                   trailSpaced,
                                   speed
                               }) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};

export const CircleProgressBarBase4 = ({
                                   className,
                                   strokeColor,
                                   strokeWidth,
                                   innerText,
                                   legendText,
                                   percentage,
                                   trailStrokeWidth,
                                   trailStrokeColor,
                                   trailSpaced,
                                   speed
                               }) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};

export const CircleProgressBarBase5 = ({
                                   className,
                                   strokeColor,
                                   strokeWidth,
                                   innerText,
                                   legendText,
                                   percentage,
                                   trailStrokeWidth,
                                   trailStrokeColor,
                                   trailSpaced,
                                   speed
                               }) => {
    const [progressBar, setProgressBar] = useState(0);
    const pace = percentage / speed;
    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
        }, pace);
    };

    useEffect(() => {
        if (percentage > 0) updatePercentage();
    }, [percentage]);

    useEffect(() => {
        if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    return (
        <figure className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                    className="donut-ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={trailStrokeColor}
                    strokeWidth={trailStrokeWidth}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />

                <circle
                    className="donut-segment"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
                    strokeDashoffset={INITIAL_OFFSET}
                />

                <g className="chart-text">
                    <text x="50%" y="50%" className="chart-number">
                        {progressBar}%
                    </text>
                    <text x="50%" y="50%" className="chart-label">
                        {innerText}
                    </text>
                </g>
            </svg>
            {legendText && (
                <figcaption className="figure-key">
                    <ul
                        className="figure-key-list"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <li>
                            <span className="shape-circle" />
                            <span>{legendText}</span>
                        </li>
                    </ul>
                </figcaption>
            )}
        </figure>
    );
};


CircleProgressBarBase1.defaultProps = {
    strokeColor: 'blueviolet',
    strokeWidth: 3,
    legendText: '',
    percentage: 90,
    trailStrokeWidth: 3,
    trailStrokeColor: '#d2d3d4',
    trailSpaced: false,
    speed: 10
};
CircleProgressBarBase2.defaultProps = {
    strokeColor: 'blueviolet',
    strokeWidth: 3,
    legendText: '',
    percentage: 75,
    trailStrokeWidth: 3,
    trailStrokeColor: '#d2d3d4',
    trailSpaced: false,
    speed: 10
};
CircleProgressBarBase3.defaultProps = {
    strokeColor: 'blueviolet',
    strokeWidth: 3,
    legendText: '',
    percentage: 80,
    trailStrokeWidth: 3,
    trailStrokeColor: '#d2d3d4',
    trailSpaced: false,
    speed: 10
};
CircleProgressBarBase4.defaultProps = {
    strokeColor: 'blueviolet',
    strokeWidth: 3,
    legendText: '',
    percentage: 72,
    trailStrokeWidth: 3,
    trailStrokeColor: '#d2d3d4',
    trailSpaced: false,
    speed: 10
};
CircleProgressBarBase5.defaultProps = {
    strokeColor: 'blueviolet',
    strokeWidth: 3,
    legendText: '',
    percentage: 93,
    trailStrokeWidth: 3,
    trailStrokeColor: '#d2d3d4',
    trailSpaced: false,
    speed: 10
};


