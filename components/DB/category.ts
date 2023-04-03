import { Category } from "../Types";

let categories: Category[] = [
    
];

export const addCategory = (newCategory) => {
    newCategory.id = categories.length;
    categories.push(newCategory);
}

export const editCategory = (id, updatedCategory) => {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == id) {
            categories[i] = { ...categories[i], ...updatedCategory };
            break;
        }
    }
}

export const deleteCategory = (id) => {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == id) {
            categories.splice(i, 1);
            break;
        }
    }
}

export const deleteAllCategories = () => {
    categories = [];
}

export const getCategories = () => {
    return categories;
}

export const getCategoryById = (id) => {
    return categories.find(item => item.id == id);
}