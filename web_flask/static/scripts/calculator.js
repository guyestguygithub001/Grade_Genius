$(document).ready(function() {
	 // Function to add new course fields
	 $('#addCourse').click(function() {
        var newCourse = $('.gpa_field:first').clone(); // Clone the first course
        newCourse.find('select').val(''); // Reset values
        $('.gpa_list').append(newCourse); // Append the cloned course to the form
    });

    // Function to calculate GPA
    function calculateGPA() {
        // Get values from form
        const grade = $('#grade').val().toUpperCase();
        const creditHours = parseInt($('#creditHours').val());

        // Check if both grade and credit hours are filled
        if (grade && creditHours) {
            // Calculate grade points
            let gradePoints;
            switch (grade) {
                case 'A':
                    gradePoints = 4.0;
                    break;
                case 'B':
                    gradePoints = 3.0;
                    break;
                case 'C':
                    gradePoints = 2.0;
                    break;
                case 'D':
                    gradePoints = 1.0;
                    break;
                case 'F':
                    gradePoints = 0.0;
                    break;
                default:
                    alert('Invalid grade entered!');
                    return;
            }

            // Calculate total quality points
            const totalQualityPoints = gradePoints * creditHours;

            // Display result
            const resultHTML = `<p>Grade: ${grade}, Credit Hours: ${creditHours}, Quality Points: ${totalQualityPoints.toFixed(2)}</p>`;
            $('#result').html(resultHTML); // Update result container
        }
    }

    // Event listener for input fields
    $('#grade, #creditHours, #gpaForm').on('change', calculateGPA); // Change event triggers calculation
	// Event listener for form submission
    $('#gpaForm').submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        calculateGPA(); // Calculate GPA
    });
});
