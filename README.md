
# Course-Registraition

### Project Features :

- **Course Selection and Cart Management:** Users can browse and select courses from the Course List, and when they click on a course select button, its title is added to the cart. The cart dynamically updates to display the selected courses, their prices, and credit hours. This feature provides an intuitive and interactive way for users to build their course list.

- **Credit Hour Tracking:** The project keeps track of the total credit hours of the selected courses and displays the remaining credit hours. As users add  courses from their cart, this feature calculates and updates the remaining credit hours. This ensures that users can easily monitor their progress towards the 20-hour limit.

- **Toast Alerts for Credit Hour Exceedance:** When the total credit hours in the cart exceed 20 hours, or when the remaining credit hours go below 0, the project displays React toast alerts.  This feature enhances the user experience by preventing them from adding too many courses and exceeding the credit hour limit.


<!--  -->




### Discusion about State how i manageed and use in my project.

- In the Home component and In App component, i declared and managed several state variables using the useState hook. These state variables include addCourse, addTitle, totalCredit, remainingHours, and totalMoney.

1.addCourse: I manage the state variable addCourse using the useState hook. This state variable stores the list of available courses fetched from the 'Public.json' file.

2.addTitle: This state variable is used to keep track of the courses that the user has added to their cart. its updating creating a new array whenever a course is added to the cart.

3.totalCredit: It stores the total number of credit hours of the selected courses.And update this state variable when a course is added in the cart.

4.remainingHours: This state variable doing Subtraction from totalCredit hour when select code.

5.totalMoney: It keeps track of the total cost of the selected courses.its update this state variable as courses are added.
