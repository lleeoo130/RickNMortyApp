import BaseProvider from './BaseProvider';

const EPISODE_PAGE_URL = 'episode?page=';
const EPISODE_BY_NAME_PAGE_URL = 'episode?name=';

const EpisodePageProvider = {
    get : (page) => {
        if ('string' === typeof page && page.includes(EPISODE_PAGE_URL)) page = page.replace(EPISODE_PAGE_URL, '');

        return BaseProvider.get(EPISODE_PAGE_URL + page);
    },

    getByName : (name) => {
        if ('string' === typeof name && name.includes(EPISODE_BY_NAME_PAGE_URL)) name = name.replace(EPISODE_BY_NAME_PAGE_URL, '');

        return BaseProvider.get(EPISODE_BY_NAME_PAGE_URL + name);
    }
    
};

export default EpisodePageProvider;