#version 330 core
out vec4 color;

in vec3 FragPos;
in vec3 Normal;  

uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;

void main()
{
	vec3 n = normalize(Normal);
	vec3 lightDir = normalize(lightPos - FragPos);
	vec3 camDir = normalize(viewPos - FragPos);
	vec3 halfAngle = normalize(camDir + lightDir);

	float diffusion = max(dot(lightDir,n),0.0);
	float specular = pow(dot(halfAngle,n),50.0);
	vec4 ambiant = vec4(0.0,0.1,0.0,1.0);
	vec3 objectColor = vec3(0.0,0.1,0.8);

	color = vec4(diffusion*objectColor + 0.5*objectColor,1.0);
} 
