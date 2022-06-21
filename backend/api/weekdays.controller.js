import WeekdaysDAO from "../dataAccessObject/weekdaysDAO.js";


export default class WeekdaysController {
  static async apiGetWeekdays(req, res, next) {
    const weekDaysPerPage = req.query.weekDaysPerPage
      ? parseInt(req.query.weekDaysPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.days) {
      filters.days = req.query.days;
    }

    const { weekDaysList } =
      await WeekdaysDAO.getWeekdays({
        filters,
        page,
        weekDaysPerPage,
      });

    let response = {
      wekdays: weekDaysList,
      page: page,
      filters: filters,
    };
    res.json(response);
  }
}