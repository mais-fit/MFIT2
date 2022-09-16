import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# from django.views.generic import ListView
# from django.http import HttpResponse, HttpRequest

from produtos.models import Kits, Marmitas


def lista_kits(request):
    kits = Kits.objects.filter(ativo=True)
    return render(
        request,
        "index.html",
        {
            "kits": kits,
        }
    )


def lista_marmitas(request, kit_id):
    # rendereiza o kit escolhido e as marmitas a serem escolhidas
    marmitas = Marmitas.objects.filter(ativo=True)
    kit = Kits.objects.get(id=kit_id)
    return render(
                    request, 
                    "marmita.html", 
                    {
                        "marmitas": marmitas,
                        "kit": kit
                    }
                )


def carrinho_de_compra(request):
    return render(request, "carrinho.html")
