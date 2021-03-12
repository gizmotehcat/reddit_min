export const subRedditFetch = async (query) => {
    const response = await fetch(`https://www.reddit.com/${query}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
};

export const subRedditTermFetch = async (query) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
};

export const subRedditMessFetch = async (query) => {
    const response = await fetch(`https://www.reddit.com/${query}.json`);
    const json = await response.json();
    return json[1].data.children.map((post) => post.data);
};