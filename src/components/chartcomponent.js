import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ chartData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'bar',
                data: chartData,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Jumlah Klien 6 Tahun Terakhir',
                            font: {
                                size: 20
                            }
                        }
                    },
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                    }
                },
            });
            return () => {
                if (myChart) {
                    myChart.destroy();
                }
            };
        }
    }, [chartData]);

    return (
        <canvas ref={chartRef} />
    );
};

export default ChartComponent;
