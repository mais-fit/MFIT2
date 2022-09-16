# Generated by Django 4.1.1 on 2022-09-16 00:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0005_itempedido'),
    ]

    operations = [
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_completo', models.CharField(max_length=500)),
                ('cpf', models.CharField(max_length=11, unique=True)),
                ('nascimento', models.DateField()),
                ('genero', models.CharField(max_length=1)),
                ('celular', models.CharField(max_length=11)),
                ('cep', models.CharField(max_length=8)),
                ('logradouro', models.CharField(max_length=500)),
                ('numero', models.CharField(max_length=5)),
                ('complemento', models.CharField(blank=True, max_length=100, null=True)),
                ('bairro', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('senha', models.CharField(max_length=500)),
                ('ativo', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'clientes',
            },
        ),
        migrations.CreateModel(
            name='ItensPedidos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('preco', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
            ],
            options={
                'db_table': 'itens_pedidos',
            },
        ),
        migrations.CreateModel(
            name='Kits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=500)),
                ('qtd_max_marmitas', models.IntegerField()),
                ('valor', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('link', models.CharField(max_length=500)),
                ('ativo', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'kits',
            },
        ),
        migrations.CreateModel(
            name='Marmitas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('descricao', models.CharField(max_length=500)),
                ('link', models.CharField(blank=True, max_length=500, null=True)),
                ('ativo', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'marmitas',
            },
        ),
        migrations.CreateModel(
            name='MeiosPagamentos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=25)),
                ('link', models.CharField(blank=True, max_length=100, null=True)),
                ('ativo', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'meios_pagamentos',
            },
        ),
        migrations.CreateModel(
            name='Pedidos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=12)),
                ('data_emissao', models.DateField()),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='produtos.clientes')),
            ],
            options={
                'db_table': 'pedidos',
            },
        ),
        migrations.CreateModel(
            name='FormasPagamentos',
            fields=[
                ('qtd', models.IntegerField()),
                ('meio_pagamento', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='produtos.meiospagamentos')),
                ('pedido', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='produtos.pedidos')),
            ],
            options={
                'db_table': 'formas_pagamentos',
                'unique_together': {('meio_pagamento', 'pedido')},
            },
        ),
        migrations.CreateModel(
            name='ItensKits',
            fields=[
                ('qtd_marmita', models.IntegerField()),
                ('marmita', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='produtos.marmitas')),
            ],
            options={
                'db_table': 'itens_kits',
            },
        ),
        migrations.DeleteModel(
            name='ItemPedido',
        ),
        migrations.DeleteModel(
            name='Kit',
        ),
        migrations.DeleteModel(
            name='Marmita',
        ),
        migrations.AddField(
            model_name='itenspedidos',
            name='kit',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='produtos.kits'),
        ),
        migrations.AddField(
            model_name='itenspedidos',
            name='pedido',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='produtos.pedidos'),
        ),
        migrations.AddField(
            model_name='itenskits',
            name='item_pedido',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='produtos.itenspedidos'),
        ),
        migrations.AlterUniqueTogether(
            name='itenskits',
            unique_together={('marmita', 'item_pedido')},
        ),
    ]