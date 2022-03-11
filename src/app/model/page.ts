export interface Page<Type>{

    content: Type[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: any; // obyekt
    size: number; // eng uzun elementlar soni masalan 20 ta elementda ko'p bo'lolmaydi
    sort: {empty: boolean, sorted: boolean, unsorted: boolean};
    totalElements: number;
    totalPage: number;
}