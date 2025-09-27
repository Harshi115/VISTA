<?php 
   $Salutation=filter_input(INPUT_POST,'Salutation');
   $Fname=filter_input(INPUT_POST,'Fname');
   $Mname=filter_input(INPUT_POST,'Mname');
   $Lname=filter_input(INPUT_POST,'Lname');
   $Email=filter_input(INPUT_POST,'Email');
   $UID=filter_input(INPUT_POST,'UID');
   $Pass=filter_input(INPUT_POST,'Pass');

   $encpass=md5($Pass);
     
      $host="localhost";
      $dbusername="root";
      $dbpassword="";
      $dbname="voice"; 

      $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
         $sql = "INSERT INTO user(Salutation,Fname,Mname,Lname,Email,UID,Pass)
         values('$Salutation','$Fname','$Mname','$Lname','$Email','$UID','$encpass')"; 

         if($conn->query($sql))
         {
            echo "<script>
            alert('Registration successful');
            window.location.href = 'home.html';
            </script>";
         } 
         else{
            echo "<script>
            alert('Registration failed: " . $stmt->error . "');
            window.history.back();
            </script>";
         } 
            
         $conn->close();
       
     ?>