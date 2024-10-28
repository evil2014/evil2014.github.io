### Guía de Estudio para Examen de Redes: VLANs, Inter-VLAN Routing y DHCP

---

**Capítulo 3: VLANs (VTP)**

**Concepto de VLAN**  
Las VLANs (Virtual Local Area Networks) permiten dividir una red física en redes lógicas, aislando el tráfico y mejorando la seguridad y eficiencia de la red.

**VTP (VLAN Trunking Protocol)**  
VTP es un protocolo de Cisco para gestionar y sincronizar configuraciones de VLAN en una red de switches.  
- **Modo Servidor**: Puede crear, modificar y eliminar VLANs, enviando actualizaciones a otros switches.
- **Modo Cliente**: Recibe actualizaciones, pero no puede modificar las VLANs.
- **Modo Transparente**: No comparte ni recibe actualizaciones de VLANs, permitiendo configuraciones locales.

**Troncal (Trunk)**  
Un puerto troncal permite que varias VLANs compartan un solo enlace físico entre switches o entre un switch y un router, configurándose generalmente con `switchport mode trunk`.

---

**Capítulo 5: Inter-VLAN Routing**

**Propósito**  
La Inter-VLAN Routing permite la comunicación entre dispositivos de distintas VLANs. Sin esta configuración, las VLANs estarían aisladas entre sí.

**Router-on-a-Stick**  
Es una técnica en la que una única interfaz física del router es dividida en subinterfaces para gestionar varias VLANs, asignando una subinterfaz para cada VLAN con su correspondiente IP:
```plaintext
interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
```

**Configuración de un enlace troncal en el switch**  
Se configura un puerto en el switch como troncal para enviar el tráfico de varias VLANs al router:
```plaintext
switchport mode trunk
```

---

**Capítulo 10: Servicio de DHCP en el Router**

**Concepto de DHCP**  
DHCP asigna automáticamente direcciones IP y otros parámetros (como puerta de enlace y DNS) a dispositivos, simplificando la gestión de red.

**Configuración básica de un pool DHCP en un router**  
Un pool DHCP se configura en el router para asignar direcciones IP:
```plaintext
ip dhcp pool VLAN10
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 8.8.8.8
```

**Exclusión de direcciones IP**  
Para evitar asignar ciertas direcciones IP, como las de dispositivos de red, se utiliza el comando:
```plaintext
ip dhcp excluded-address 192.168.10.1 192.168.10.10
```

**Asignación en Redes con VLANs**  
En redes con VLANs, el router puede asignar IPs en diferentes VLANs configurando un pool DHCP y subinterfaces.

---

### Ejemplo de Preguntas de Estudio

1. **VTP**: ¿Qué modo de VTP permite enviar y recibir actualizaciones de VLAN sin modificar la configuración local?
2. **Inter-VLAN Routing**: ¿Cuál es el propósito de un router-on-a-stick?
3. **DHCP**: ¿Qué comando se usa para definir un rango de direcciones IP en un pool DHCP?

---

### Consejos de Estudio

- Familiarízate con **comandos básicos** para VTP, Inter-VLAN Routing y DHCP.
- Practica configuraciones en **Packet Tracer** para crear VLANs, configurar enlaces troncales y probar la asignación de direcciones IP con DHCP.
- Asegúrate de comprender la estructura y función de cada comando.

