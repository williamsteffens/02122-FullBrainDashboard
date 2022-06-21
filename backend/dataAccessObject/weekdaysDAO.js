

let Weekdays

export default class WeekdaysDAO {
    static async injectDB(conn) {
        if (Weekdays) {
            return
        }

        try {
            Weekdays = await conn.db(process.env.DASHBOARD_data).collection("weekdays")
        } catch (e) {
            console.error(
                `Ùnable to establish a collection handle in Weekdays: ${e}`, 
            )
        }
    }

    static async getWeekdays({
        filters = null,
        page = 0,
        weekdaysPerPage = 20,
    }   = {}) {
        let query
        if (filters) {
            if("days" in filters){
                query = { $text: { $search: filters["days"] } }
            }
        }

        let cursor

        try{
            cursor = await Weekdays
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return {weekdays: []}
        }

        const displayCursor = cursor.limit(weekdaysPerPage).skip(weekdaysPerPage * page)

        try {
            const weekDaysList = await displayCursor.toArray()
      
            return { weekDaysList }
          } catch (e) {
            console.error(
              `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { weekDaysList: [] }
          }
    }

    
}