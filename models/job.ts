export interface Job {
    title: string;
    details: string;
    location: string;
    require: string;
    dateStart: Date;
    dateEnd: Date;
    tags?: string;
    applyee: number;
    username: string;
    employee: number;
    imgUrl: string;
}