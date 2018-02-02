


Psuedocode

Front End:
 Three pages
  Home
  Add Reservation
  View Tables
Back End:
  Routes:
    Get Routes
      List of reservations
        Get reservation list object
        Convert to JSON
        Transmit
      Waitlist
        Get waitlist object
        Convert to JSON
        Transmit
    Put Routes
      Create new Reservation
        Take incoming JSON  
        Parse
        If < n items in Reservation list, push to reservation list object
        If > n items in reservation list, push to wait list
        Either way, send a response.
      Clear Tables
        Zero out reservation list and waitlist