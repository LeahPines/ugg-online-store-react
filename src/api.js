export const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const response = await fetch('https://dummyjson.com/c/8433-8bc9-4a83-863e');
            const result = await response.json();
            resolve(result);
        }, 2000);
    });
};