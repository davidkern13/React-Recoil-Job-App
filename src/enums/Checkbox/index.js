export const checkBoxList = (type) => {
    let lists = {
        JOBS_CATEGORY: ['Enginee','Developer','Full-Stack','Front-End','Software','Senior','Junior'],
        JOBS_LEVEL: ['Junior','Middle','Senior'],
    };
    return lists[type];
}