<?php 
     $UID = $_POST['UID'];
     $Pass = $_POST['Pass']; 

     $host = "localhost";
     $dbusername = "root";
     $dbpassword = "";
     $dbname = "voice"; 

     $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

     if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
     }

     $stmt = $conn->prepare("SELECT Pass FROM user WHERE UID = ?");
     $stmt->bind_param("s", $UID); 

     $stmt->execute();

     $stmt->bind_result($storedPass);
     $encpass=md5($Pass);

     if ($stmt->fetch()) {
         if ($storedPass === $encpass) {
             header("Location: speak.html");  
         } else {
            echo
            "<script>
             alert('Invalid Credentials'); 
             window.location.href = 'home.html'; 
             </script>";
         }
     } else {
        echo
        "<script>
         alert('Invalid Credentials'); 
         window.location.href = 'home.html'; 
         </script>"; 
     }

     $stmt->close();
     $conn->close();
?>