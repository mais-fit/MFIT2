from django.contrib import admin

from produtos.models import Clientes, FormasPagamentos, ItensKits, ItensPedidos, Kits, Marmitas, MeiosPagamentos, Pedidos

admin.site.register(Clientes)
admin.site.register(FormasPagamentos)
admin.site.register(ItensKits)
admin.site.register(ItensPedidos)
admin.site.register(Kits)
admin.site.register(Marmitas)
admin.site.register(MeiosPagamentos)
admin.site.register(Pedidos)
