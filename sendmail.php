<?php
// Vérifie si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email où les messages seront envoyés
    $to = "savryalice@gmail.com"; // Remplacez par votre adresse email
    $subject = "Nouveau message depuis le formulaire de contact";

    // Corps de l'email
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // Entêtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer.";
    }
} else {
    echo "Méthode de requête non valide.";
}
?>
