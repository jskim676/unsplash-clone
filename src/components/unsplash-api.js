import { createApi } from 'unsplash-js';

const api = createApi({
    accessKey: 'sQC0kH3cG6V5Ch-rOP4JmUsy5OiUGtTdQDidEikn3qU',
});

const listPhotos = (page, perPage) => {
    return api.photos.list({
        page: page,
        perPage: perPage,
    });
};

const searchPhotos = (query, page, perPage) => {
    return api.search.getPhotos({
        query: query,
        page: page,
        perPage: perPage,
    });
};

const statsPhoto = (id) => {
    return api.photos.getStats({
        photoId: id,
    });
};

const listTopics = (page, perPage) => {
    return api.topics.list({
        page: page,
        perPage: perPage,
    });
};

const topicsPhotos = (IdOrSlug, page, perPage) => {
    return api.topics.getPhotos({
        topicIdOrSlug: IdOrSlug,
        page: page,
        perPage: perPage,
    });
};

export { listPhotos, searchPhotos, statsPhoto, listTopics, topicsPhotos };
