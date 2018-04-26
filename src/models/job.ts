export interface Job {
    title: string;
    location: string;
    dateStart: Date;
    dateEnd: Date;
    describe?: string;
    require: string;
    employee?: number;
    applyee?: number;
    imgUrl: string;
    ref?: string;
}