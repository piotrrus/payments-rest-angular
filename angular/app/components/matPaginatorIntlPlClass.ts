import {MatPaginatorIntl} from '@angular/material';

export class MatPaginatorIntlPl extends MatPaginatorIntl {
    itemsPerPageLabel = 'pokaż';
    getRangeLabel = polishRangeLabel;
    nextPageLabel = 'Następna strona';
    previousPageLabel = 'Poprzednia strona';
    lastPageLabel = 'Ostatnia strona';
    firstPageLabel = 'Pierwsza strona';
}

const polishRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || length === 1) {
        return ``;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} z ${length}`;
}
