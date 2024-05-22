/* 
*
*   Author: Job Gedions Orungo
*   Interviewer: Matus Milchalko
*   Date of Interview: 18/03/2024 1658hours
*   Task Duration: 5 minutes
*
*   Question
*   ````````
*   Given 2 tables, expense & budget, return a flat table with;
*       Projet Id, Year, Budget, Expenses, Delivery (Expenses / Budget)
*   
*   expense table columns; ProjectId, Year, Expenses
*   budget table columns; ProjectId, Year, Budget
*
*   Solution Approach
*   `````````````````
*   - use left join on year and ProjectId to return a flat table with columns
*     Projet Id, Year, Budget, Expenses, Delivery (Expenses / Budget)
 */

--  SOLUTION

SELECT b.ProjectID, b.Year, b.Budget, e.Expenses, e.Expenses/b.Budgets AS Delivery
FROM Budgets as b
LEFT JOIN Expenses as e On e.ProjectID = b.ProjectID AND e.Year = b.Year