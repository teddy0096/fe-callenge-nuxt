export async function  fetchTodoList(perPage, page)   {
    try {
        const response = await fetch('http://localhost:3001/todo_list?_limit=' + perPage + '&_page=' + page)
        if (!response.ok) {
            throw new Error('Network response was not okay')
        }
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching todo list:', error)
        return [];
    }
}

export async function  fetchDropDownItem()   {
    try {
        const response = await fetch('http://localhost:3001/dropdown_list')
        if (!response.ok) {
            throw new Error('Network response was not okay')
        }
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching todo list:', error)
        return [];
    }
}
