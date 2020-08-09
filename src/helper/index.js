export const renderArticles = (data) => {
    switch (data.state) {
        case 'hasValue':
            return data.contents;
        case 'loading':
            return data.state;
        case 'hasError':
            return data.contents;
        default:
            return null;
    }
};
