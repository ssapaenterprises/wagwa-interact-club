// Basic JavaScript for the interface
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wagwa Interact Club System Loaded');
    
    // Simple navigation active state
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
// Supabase configuration
const supabaseUrl = 'YOUR_SUPABASE_URL_HERE';
const supabaseKey = 'YOUR_SUPABASE_KEY_HERE';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Test connection
async function testConnection() {
    const { data, error } = await supabase.from('members').select('count');
    if (error) {
        console.error('Connection error:', error);
    } else {
        console.log('Connected successfully:', data);
    }
}

testConnection();
