import BaseProvider from './BaseProvider';

const CHARACTER_PAGE_URL = 'character/';

const CharactersProvider = {
    getByIds : (ids) => {
        if ('string' === typeof ids && ids.includes(CHARACTER_PAGE_URL)) ids = ids.replace(CHARACTER_PAGE_URL, '');

        return BaseProvider.get(CHARACTER_PAGE_URL + ids);
    }
};

export default CharactersProvider;