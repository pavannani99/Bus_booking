🚌 Problem Statement: Bus Boarding Sequence Generator for min boarding time							
							
Objective Design and implement a system that generates a booking-wise boarding sequence for bus passengers based on seat proximity to the front entry and minimum boarding time . The system should produce a UI-friendly output that reflects the order in which passengers should board, considering only one front entry point.							
							
Inputs 							
							
A file containing booking data with the following format:					sample below 		
Booking_ID   	Seats						
101	A1,B1						
120	A20,C2						
							
Constraints							
							
All passengers board from a single front entry.							
							
Seat labels (e.g., A1, B1, A20) imply relative distance from the entry—							
							
A single booking may contain multiple seat labels.							
							
The system must assign a boarding sequence based on the seat for optimal  borading time 							
							
In case of a tie, booking IDs with earlier values can be given priority.							
							
Desired Output Format (for UI)							
							
Seq   Booking_ID							
1     120							
2     101							
							
							
							
							
	Bus Layout						
							
	A20/B20		c20/d20				
							
							
							
		X			if X is standing 		
		Y			Y cant cross 		
							
							
							
							
							
	A1/B1		c1/d1				
							
			Entry		only one entry in front		
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
